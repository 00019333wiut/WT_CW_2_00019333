const express = require('express');
const { validationResult } = require('express-validator');
const { addTicketValidation, updateTicketValidation, deleteTicketValidation } = require('../../../validators/ticket');

const router = express.Router();
const ticket_controller = require('../../../controllers/api/ticket');

// Define API routes
router.get('/', (req, res)=>{
    ticket_controller.getAll(req, res);
});

router.post('/', addTicketValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    ticket_controller.create(req, res)
})

router.put('/:id', updateTicketValidation(), (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  ticket_controller.update(req, res)
})

router.delete('/:id', deleteTicketValidation(), (req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  ticket_controller.delete(req, res)
})

module.exports = router;
