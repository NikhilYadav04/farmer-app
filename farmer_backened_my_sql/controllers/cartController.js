import prisma from "../DB/db.config.js";

export const add_product_cart = async (req, res) => {
  try {
    const { id } = req.user;
    const { p_id } = req.query;
    const { count } = req.body;

    const isProduct = await prisma.cart.findFirst({
      where: {
        p_id
      },
    });

    if (isProduct) {
      return res.status(401).json({
        success: false,
        message: `Product already added in cart`,
      });
    }

    const product = await prisma.cart.create({
      data: {
        user_id: id,
        p_id,
        count,
      },
    });

    return res.status(200).json({
      success: true,
      message: `Product added to cart successfully`,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const chang_count = async (req, res) => {
  try {
    let { id } = req.query;
    id = Number(id);

    const { count } = req.body;

    await prisma.cart.update({
      where: {
        id,
      },
      data: {
        count,
      },
    });

    return res.status(200).json({
      success: true,
      message: `Product count updated successfully`,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const remove_product = async (req, res) => {
  try {
    let { id } = req.query;
    id = Number(id);

    await prisma.cart.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({
      success: true,
      message: `Product removed from cart`,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const get_products = async (req, res) => {
  try {
    let { user_id } = req.query;
    user_id = Number(user_id);

    const products = await prisma.cart.findMany({
      where: {
        user_id,
      },
      include: {
        product: {
          select: {
            title: true,
            description: true,
            image: true,
            price: true,
            inStock: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: products,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};
