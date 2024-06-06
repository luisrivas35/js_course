import joyas, { filter, find } from "../data/joyas.js";

const getAllJoyas = (req, res) => {
  const { page = 1, limit = 10, sort } = req.query;
  let joyasData = [...joyas];

  // Sorting
  if (sort) {
    joyasData = joyasData.sort((a, b) =>
      sort === "asc" ? a.valor - b.valor : b.valor - a.valor
    );
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedData = joyasData.slice(startIndex, endIndex);

  const hateoas = paginatedData.map((j) => ({
    ...j,
    links: {
      self: `${req.protocol}://${req.get("host")}/joyas/${j.id}`,
    },
  }));

  res.json(hateoas);
};

const getJoyasByCategoria = (req, res) => {
  const { categoria } = req.params;
  const joyasByCategory = filter((j) => j.categoria === categoria);
  res.json(joyasByCategory);
};

const getJoyasFiltered = (req, res) => {
  const filters = req.query;
  let filteredJoyas = [...joyas];

  Object.keys(filters).forEach((key) => {
    filteredJoyas = filteredJoyas.filter(
      (j) => j[key] && j[key].toString() === filters[key]
    );
  });

  res.json(filteredJoyas);
};

const getJoyaById = (req, res) => {
  const { id } = req.params;
  const joya = find((j) => j.id === parseInt(id));

  if (!joya) {
    return res.status(404).json({ error: "Joya no encontrada" });
  }

  res.json(joya);
};

export default {
  getAllJoyas,
  getJoyasByCategoria,
  getJoyasFiltered,
  getJoyaById,
};
