import { CuentaModel } from "../models/cuenta.model.js"

// api/v1/cuentas/:id
const getCuenta = async (req, res) => {
    try {
        const { id } = req.params
        const cuenta = await CuentaModel.findOneById(id)
        return res.json(cuenta)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const CuentaController = {
    getCuenta
}