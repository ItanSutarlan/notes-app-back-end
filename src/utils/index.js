const mapDBToModel = (data) => ({
  ...data,
  createdAt: data.created_at,
  updatedAt: data.updated_at,
});

module.exports = { mapDBToModel };
