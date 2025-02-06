const { ERR, OK } = require("../utils/response");
const { User } = require("../model/index.model");
const argon2 = require("argon2");

const GetFavoriteMovies = async (req, res) => {
  return OK(res, 200, req.user, "Get Favorite Movies Success");
};

const AddFavoriteMovies = async (req, res) => {
  try {
    const { data } = req.body;
    const user = await User.findById(req.user._id);
    user.favoriteMovies.push(data);
    await user.save();

    return OK(res, 201, null, "Add Favorite Movies Success");
  } catch (error) {
    return ERR(res, 500, "Something went wrong");
  }
};

const RemoveFavoriteMovies = async (req, res) => {
  try {
    const { movieID } = req.body;
    const user = await User.findById(req.user._id);
    const existingMovie = user.favoriteMovies.some(
      (movie) => movie.id === movieID
    );

    if (!existingMovie) {
      return ERR(res, 404, "Movie not found");
    }

    user.favoriteMovies = user.favoriteMovies.filter(
      (movie) => movie.id !== movieID
    );

    await user.save();

    return OK(res, 200, null, "Removing Favorite Movies Success");
  } catch (error) {
    return ERR(res, 500, "Something went wrong");
  }
};

const SignInToken = async (req, res) => {
  try {
    const { email, password, token } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      return ERR(res, 404, "User not found");
    }

    const isPasswordOK = await argon2.verify(user.password, password);

    if (!isPasswordOK) {
      return ERR(res, 401, "Password not match");
    }

    user.token = token;

    await user.save();

    return OK(res, 200, null, "Sign-in Success");
  } catch (error) {
    return ERR(res, 500, "Error Sign-in Token");
  }
};

const SignOutToken = async (req, res) => {
  const user = await User.findById(req.user._id);
  user.token = null;
  await user.save();

  return OK(res, 204, null, "Sign-out Success");
};

const SignUpUser = async (req, res) => {
  const { email, password } = req.body;
  const hashPass = await argon2.hash(password);

  try {
    const user = await User.findOne({ email });

    if (user) return ERR(res, 409, "User already exist");

    const addNewUser = new User({ email, password: hashPass });
    await addNewUser.save();

    return OK(res, 201, null, "Sign-up Success");
  } catch (error) {
    console.log(error);
    return ERR(res, 500, "Something went wrong");
  }
};

module.exports = {
  GetFavoriteMovies,
  AddFavoriteMovies,
  RemoveFavoriteMovies,
  SignInToken,
  SignOutToken,
  SignUpUser,
};
