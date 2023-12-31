const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const cors = require('cors');

app.use(express.json())
app.use(cors())

app.post("/documents", async (req, res) => {
  const { name, position, status } = req.body;


  try {
    const createdDocument = await prisma.employee.create({
      data: {
        name,
        position,
        status,
      },
    });

    res.status(201).json(createdDocument);
  } catch (error) {
    console.error("Error creating document:", error);
    res.status(500).json({ error: "Could not create document" });
  }
});

app.delete("/documents/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDocument = await prisma.employee.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json(deletedDocument);
  } catch (error) {
    console.error("Error deleting document:", error);
    res.status(500).json({ error: "Could not delete document" });
  }
});

app.put("/documents/:id", async (req, res) => {
  const { id } = req.params;
  const { name, position, status } = req.body;

  try {
    const updatedDocument = await prisma.employee.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        position,
        status,
      },
    });

    res.status(200).json(updatedDocument);
  } catch (error) {

    console.error('Error updating document:', error);
    res.status(500).json({ error: 'Could not update document' });
  }
});

app.get("/documents/:id", async (req, res)=>{
  const { id } = req.params;

  try{
    const employeeDetail = await prisma.employee.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json(employeeDetail);

  } catch(error){

    console.error('Error retreiving document:', error);
    res.status(500).json({ error: 'Could not retreive document' });

  }
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});