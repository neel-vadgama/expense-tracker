const Transaction = require("../models/Transaction");

// @desc: get all transactions
// @route: GET /api/v1/transactions
// @access: public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc: get all transactions
// @route: GET /api/v1/transactions
// @access: public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const newTransaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: newTransaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (value) => value.message
      );
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc: get all transactions
// @route: DELETE /api/v1/transactions/:id
// @access: public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No Transaction Found",
      });
    }
    await transaction.remove();

    return res.status(200).json({
      success: true,
      message: "Transaction Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
