// async function deleteFormHandler(event) {
//   event.preventDefault();
//     try {
//       const imageData = await Image.destroy({
//           where: {
//               id: req.params.id,
//               user_id: req.session.user_id,
//           },
//       });

//       if (!imageData) {
//         res.status(404).json({ message: 'Could not find a image with that id' })
//       }

//       res.status(200).json(imageData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
// };

// document.querySelector('.delete').addEventListener('click', deleteFormHandler);