// const User = require("../model/User");

// module.exports = class LoginService {
//   static async save(req, res) {
//     const { id, usuario, pasword } = req.body;
//     try {
//       const response = await exist(id);
//       if (!response.exist) {
//         await User.create({
//           id,
//           usuario,
//           pasword,
//         });
//         res.json({ message: "Usuario registrado correctamente" });
//         res.status(201);
//       } else {
//         res.status(400);
//         res.json({ message: "Usuario existente" });
//       }
//       return res;
//     } catch (error) {
//       res.status(400);
//       res.json({ error: error });
//     }
//   }

//   static async update(req, res) {
//     const { usuario, pasword } = req.body;
//     const id = req.params.id;
//     try {
//       await User.updateOne(
//         { id: `${id}` },
//         {
//           usuario,
//           pasword,
//         }
//       );
//       res.json({ message: "usuario actualizado correctamente" });
//       res.status(200);
//     } catch (error) {
//       res.status(400);
//       res.json({ error: error });
//     }
//   }
//   static async delete(req, res) {
//     const id = req.params.id;
//     try {
//       const deleted = await User.deleteOne({
//         id: `${id}`,
//       });
//       if (deleted.deletedCount > 0) {
//         res.json({ message: "Usuario borrado " });
//         res.status(200);
//       } else {
//         res.json({ message: "Usuario no encontrado" });
//         res.status(404);
//       }
//     } catch (error) {
//       res.status(400);
//       res.json({ error: error });
//     }
//   }
//   static async findAll(req, res) {
//     try {
//       const data = await User.find({}).select("-__v");
//       res.json({ data: data });
//       res.status(200);
//     } catch (error) {
//       res.status(400);
//       res.json({ error: error });
//     }
//   }
//   static async findOne(req, res) {
//     const id = req.params.id;
//     try {
//       const product = await User.find({ id }).select("-_id").select("-__v");
//       res.json({ data: product });
//       res.status(200);
//     } catch (error) {
//       res.status(400);
//       res.json({ error: error });
//     }
//   }
// };

// const exist = async (id) => {
//   try {
//     const result = await User.findOne({ id });
//     if (!result) return { exist: false };
//     else return { exist: true };
//   } catch (err) {
//     console.error(`Algo salio mal :( : ${err}`);
//     return { exist: false, error: err };
//   }
// };
