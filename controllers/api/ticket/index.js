// import specific service class
const ticket_service = require('../../../services/ticket')

// mention the service's needed actions (methods)
const ticket_controller = {
    getAll(req, res) {
        res.json(ticket_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            ticket_service.create(req, res)
        )
    },
    update(req, res) {
        const ticket = ticket_service.update(req.params.id, req.body)
        
        if (ticket) {
            res.json(ticket)
        } else {
            res.status(404).send('Ticket not found')
        }
    },
    delete(req, res) {
        const ticket = ticket_service.getById(req.params.id)
        
        if (ticket) {
            ticket_service.delete(req.params.id)
            res.status(204).send('Ticket deleted successfully')
        } else {
            res.status(404).send('Ticket not found')
        }
    }
}

module.exports = ticket_controller
