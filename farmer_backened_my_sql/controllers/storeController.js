import prisma from "../DB/db.config.js";

export const upload_response = async (req, res) => {
  try {
    const { id } = req.user;
    const response = req.body.response;
    console.log(id, response);

    const body = await prisma.response.create({
      data: {
        user_id: id,
        image: req.file.path,
        response: response,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Response uploaded Successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is ; ${e.message}`,
    });
  }
};

export const get_responses = async (req, res) => {
  try {
    const { id } = req.user;
    const responses = await prisma.response.findMany({
      where: {
        user_id: id,
      },
    });

    return res.status(200).json({
      success: true,
      message: responses,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: ` Error is ${e.message}`,
    });
  }
};
