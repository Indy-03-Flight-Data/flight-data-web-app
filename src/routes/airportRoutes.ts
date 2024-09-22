import { Request, Response } from "express";
import pool from "../db";

// Search for airports based on input query (name or IATA code)
const searchAirports = async (req: Request, res: Response) => {
    const searchTerm = req.query.q?.toString().toUpperCase();  // Get the query parameter
    
    if (!searchTerm) {
        return res.status(400).json({ error: "Search term is required" });
    }

    try {
        const query = `
            SELECT name, iata_code 
            FROM airports 
            WHERE UPPER(name) LIKE $1 OR UPPER(iata_code) LIKE $1
            LIMIT 10;
        `;
        const result = await pool.query(query, [`${searchTerm}%`]);  // Fetch matching airports
        res.json(result.rows);  // Send results back
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

export default searchAirports;
