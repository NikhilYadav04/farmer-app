import prisma from "../DB/db.config.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signup = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    const isUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (isUser) {
      return res.status(401).json({
        success: false,
        message: "User already exists!, Try with another email.",
      });
    }

    const hashPassword = await bcryptjs.hash(password, 8);

    const User = await prisma.user.create({
      data: {
        email: email,
        name: name,
        phone: phone,
        password: hashPassword,
      },
    });

    return res.status(200).json({
      success: true,
      message: "User account created",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is ; ${e.message}`,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!isUser) {
      return res.status(401).json({
        success: false,
        message: "User does not exists!",
      });
    }

    const isMatch = await bcryptjs.compare(password, isUser.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password, Please Try Again!",
      });
    }

    //* generate token
    const Token = await jwt.sign(
      {
        id: isUser.id,
      },
      process.env.JSON_SECRET,
      { expiresIn: "20m" }
    );

    console.log(`User ID is ${isUser.id}`);

    return res.status(200).json({
      success: true,
      message: "Signed In Successfully!",
      token: Token,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is ; ${e.message}`,
    });
  }
};
