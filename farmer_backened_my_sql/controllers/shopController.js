import prisma from "../DB/db.config.js";

export const add_shop = async (req, res) => {
  try {
    const { id } = req.user;
    const { owner, phone, address, locality, city, state } = req.body;

    const shop = await prisma.shop.findUnique({
      where: {
        user_id: id,
      },
    });

    if (shop) {
      return res.status(401).json({
        success: false,
        message: "Shop account already exists!",
      });
    }

    const new_shop = await prisma.shop.create({
      data: {
        owner: owner,
        user_id: id,
        phone,
        address,
        locality,
        city,
        state,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Shop account created!",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const get_shop = async (req, res) => {
  try {
    const { id } = req.user;

    const shop = await prisma.shop.findUnique({
      where: {
        user_id: id,
      },
    });

    if (!shop) {
      return res.status(401).json({
        success: false,
        message: "No shop account found",
      });
    }

    return res.status(200).json({
      success: true,
      message: shop,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const edit_shop = async (req, res) => {
  try {
    const { id } = req.user;
    const { owner, phone, address, locality, city, state } = req.body;

    const updated_details = await prisma.shop.update({
      where: {
        user_id: id,
      },
      data: {
        owner,
        phone,
        address,
        locality,
        city,
        state,
      },
    });

    return res.status(200).json({
      success: true,
      message: `Shop Details updated successfully`,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const add_product = async (req, res) => {
  try {
    let { s_id } = req.query;
    const { title, description, price, image, type, category } = req.body;
    s_id = Number(s_id);

    const product = await prisma.product.create({
      data: {
        s_id,
        title,
        description,
        price,
        image,
        type,
        category,
      },
    });

    return res.status(200).json({
      success: true,
      message: `Product added successfully`,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const edit_product = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, description, price, image, type, category } = req.body;

    await prisma.product.update({
      where: { id },
      data: {
        title,
        description,
        price,
        image,
        type,
        category,
      },
    });
    return res.status(200).json({
      success: true,
      message: `Product edited successfully`,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Error is : ${e.message}`,
    });
  }
};

export const delete_product = async (req, res) => {
  try {
    const { id } = req.query;

    await prisma.product.delete({
      where: { id },
    });
    return res.status(200).json({
      success: true,
      message: `Product deleted successfully`,
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
    let { s_id } = req.query;
    s_id = Number(s_id);

    const products = await prisma.product.findMany({
      where: {
        s_id,
      },
      include: {
        shop: {
          select: {
            owner: true,
            locality: true,
            address: true,
            city: true,
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
