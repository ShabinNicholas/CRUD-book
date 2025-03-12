const BookSchema = require('./Schema')

const addBook = async (req, res) => {
    try {
        const newBook = new BookSchema({
            bookName: req.body.bookName,
            bookPrice: req.body.bookPrice,
            bookRating: req.body.bookRating
        })
        await newBook.save()
        res.status(200).json({
            message: 'Created',
            data: newBook
        })
    } catch (error) {
        console.log(error);
    }
}

const viewAll = async (req, res) => {
    try {
        const allBooks = await BookSchema.find()
        res.status(200).json({
            message: "User data found",
            data: allBooks
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error while fetching user details",
            error: error
        })

    }
}

const viewSingle = async (req, res) => {
    const { id } = req.params
    try {
        const singleBook = await BookSchema.findById(id)
        res.status(200).json({
            message: "book detail fetched",
            data: singleBook
        })
    } catch (error) {
        res.json({
            message: 'Error in fetching book detail',
            Error: error
        })
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBook = await BookSchema.findByIdAndDelete(id)
        res.status(200).json({
            message: "Book details deleted successfully",
            data: deleteBook
        })
    } catch (error) {
        res.json({
            message: "Error in deleting book detail",
            Error: error
        })
    }
}

const editBook = async (req, res) => {
    try {
        const { id } = req.params
        const updateBook = {
            bookName: req.body.bookName,
            bookPrice: req.body.bookPrice,
            bookRating: req.body.bookRating,
        }
        const updatedBook = await BookSchema.findByIdAndUpdate(id, updateBook, { new: true })
        res.status(200).json({
            message: "Book details updated successfully",
            data: updatedBook
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in updating book detail",
            error: error
        })
    }

}


module.exports = {
    addBook,
    viewAll,
    viewSingle,
    deleteBook,
    editBook
}