import prisma from "../DB/db.config.js";

export const post_question = async (req, res) => {
  try {
    const { id } = req.user;
    const { question } = req.body;

    const Question = await prisma.question.create({
      data: {
        user_id: id,
        question,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Question Posted Successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

//* for deleting a question we search by using the user_id and id of the question itself as present on the table.
export const delete_question = async (req, res) => {
  try {
    const { id } = req.user;
    const { q_id } = req.query;

    await prisma.question.delete({
      where: {
        user_id: id,
        id: q_id,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Question Deleted Successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const get_questions = async (req, res) => {
  try {
    const { id } = req.user;

    const questions = await prisma.question.findMany({
      where: {
        user_id: id,
      },
      include: {
        user: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: questions,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const add_reply = async (req, res) => {
  try {
    const { id } = req.user;
    const { q_id } = req.query;
    const { reply } = req.body;

    const Reply = await prisma.reply.create({
      data: {
        user_id: id,
        q_id: Number(q_id),
        reply: reply,
      },
    });

    return res.status(200).json({
      success: true,
      message: `Reply Added`,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

//* using question id(q_id) and comment uuid(r_id) delete comment
export const delete_reply = async (req, res) => {
  try {
    const { q_id, r_id } = req.query;
    const { id } = req.user;

    await prisma.reply.delete({
      where: {
        q_id: Number(q_id),
        id: r_id,
        user_id: id,
      },
    });

    return res.status(200).json({
      success: true,
      message: `Reply Deleted`,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const get_replies = async (req, res) => {
  try {
    const { q_id } = req.query;

    const replies = await prisma.reply.findMany({
      where: {
        q_id: Number(q_id),
      },
      include: {
        user: true,
        question: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: replies,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};
