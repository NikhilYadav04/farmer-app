import prisma from "../DB/db.config";

export const create_history = async (req, res) => {
  try {
    const { p_id } = req.query;

    const product = await prisma.product.findUnique({
      where: {
        p_id: p_id,
      },
    });

    await prisma.order_History.create({
      data: {
        p_id: p_id,
        count: product.count,
        price: product.price,
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is :${e.message}`,
    });
  }
};

export const get_history = async (req, res) => {
    
};
