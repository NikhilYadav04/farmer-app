import prisma from "../DB/db.config.js";

export const search_product_location = async (req, res) => {
  try {
    const { search_term, type, locality, city } = req.body;

    const products = await prisma.product.findMany({
      where: {
        AND: [
          //* present in the title or description
          {
            OR: [
              {
                title: {
                  contains: search_term,
                },
              },
              {
                description: {
                  contains: search_term,
                },
              },
            ],
          },
          //* present in type
          {
            type: {
              contains: type,
            },
          },
          //* present in address,city and locality
          {
            OR: [
              {
                OR: [
                  {
                    shop: {
                      locality: {
                        contains: locality,
                      },
                    },
                  },
                  {
                    shop: {
                      address: {
                        contains: locality,
                      },
                    },
                  },
                ],
              },
              {
                shop: {
                  city: {
                    contains: city,
                  },
                },
              },
            ],
          },
        ],
      },
      include: {
        shop: {
          select: {
            owner: true,
            phone: true,
            address: true,
          },
        },
      },
      take: 20,
    });

    if (!products || products.length == 0) {
      return res.status(401).json({
        success: false,
        message: `No products found in your area. Would you like to expand your search to all of India?`,
      });
    }

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

export const search_product = async (req, res) => {
  try {
    const { search_term, type } = req.body;

    const products = await prisma.product.findMany({
      where: {
        AND: [
          //* present in the title or description
          {
            OR: [
              {
                title: {
                  contains: search_term,
                },
              },
              {
                description: {
                  contains: search_term,
                },
              },
            ],
          },
          //* present in type
          {
            type: {
              contains: type,
            },
          },
        ],
      },
      include: {
        shop: {
          select: {
            owner: true,
            phone: true,
            address: true,
          },
        },
      },
      take: 20,
    });

    if (!products || products.length == 0) {
      return res.status(401).json({
        success: false,
        message: `No products found!`,
      });
    }

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
