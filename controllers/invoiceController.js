require("dotenv").config();
const Invoice = require("../models/Invoice");
// const router = require("../routes/invoiceRoutes");

// register invoice
const invoiceCreate = async (req, res) => {
    try {
        if (req.body !== "") {
            const data = await Invoice(req.body);
            data.save();
            res.send(data);
        } else {
            let detail = { "detail": "response in empty" };
            res.send(detail);
        }
    } catch (error) {
        res.send(error.message);
    }
}


// show detail
const invoiceShow = async (req, res) => {
    try {
        if (req.body !== "") {
            const data = await Invoice(req.body);
            data.save();
            res.send(data);
        } else {
            let detail = { "detail": "response in empty" };
            res.send(detail);
        }
    } catch (error) {
        res.send(error.message);
    }
}

// find the creator of Invoice
const who = async (req, res) => {
    const id = req.body.id;
    try {
        if (id) {
            const data = await Invoice.find({ createdBy: id });
            res.send(data);
        } else {
            let detail = { "detail": "user not found" };
            res.send(detail);
        }
    } catch (error) {
        res.send(error.message);
    }
}

// all the invoices
const allInvoice = async (req, res) => {
    const id = req.body.id;
    try {
        if (id) {
            const data = await Invoice.find();
            res.send(data);
        } else {
            let detail = { "detail": "user not found" };
            res.send(detail);
        }
    } catch (error) {
        res.send(error.message);
    }
}

// status wise search
const statusSearch = async (req, res) => {
    const id = req.body.id;
    const status= req.body;
    try {
        if (id) {
            const data = await Invoice.find({status:status});
            res.send(data);
        } else {
            let detail = { "detail": "user not found" };
            res.send(detail);
        }
    } catch (error) {
        res.send(error.message);
    }
}

// // search
// const search=async (req,res)=>{

// }


module.exports = { invoiceCreate, invoiceShow, who, allInvoice, statusSearch };