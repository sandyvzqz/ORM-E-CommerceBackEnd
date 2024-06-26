const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // FIND all tags, be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({include: Product});
    //if tagData is found, return a successful status and the data
    res.status(200).json(tagData);
  } catch (err) {
    //if error occurred, return an unsuccessful status and error msg
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // FIND a single tag by its `id`, be sure to include its associated Product data
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: {
        model: Product
      }
    });
    
    if(!tagData){
      res.status(400).json({message: 'No tag found with that ID.'});
      return;
    }
   
    res.status(200).json(tagData);

  } catch (err){
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // CREATE a new tag
  try{
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // UPDATE a tag's name by its `id` value
  try{
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if(!tagData[0]){
      res.status(400).json({ message: 'No tag found with that ID.'});
      return;
    }
    res.status(200).json(tagData);

  } catch(err){
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // DELETE on tag by its `id` value
  try{
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if(!tagData){
      res.status(400).json({ message: 'No tag found with that ID.'});
      return;
    }

    res.status(200).json(tagData);

  } catch(err){
    res.status(400).json(err);
  }
});

module.exports = router;
