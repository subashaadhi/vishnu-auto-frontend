import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, CircularProgress } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import ChatIcon from '@mui/icons-material/Chat';
import StatusBadge from '../../SpecifiedComponents/Global/StatusBadge';
import RestockButton from '../../SpecifiedComponents/Dashboard/RestockButton';

const LowStockTable = () => {
    const [filter, setFilter] = useState('all');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLowStock = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/spares');

                // 1. response.data ulla irukka 'data' array-va edukurom
                const sparesArray = response.data.data;

                // 2. DB-la irukka 'stockQty' vachi 10-ku keela irukka items filter pandrom
                const lowStockData = sparesArray.filter(spare => spare.stockQty <= spare.lowStockAlert);

                setItems(lowStockData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching low stock data:", error);
                setLoading(false);
            }
        };

        fetchLowStock();
    }, []);

    const filteredItems = items.filter(item => {
        if (filter === 'all') return true;
        return item.category.toLowerCase().includes(filter);
    });

    const handleExportCSV = () => {
        let csvContent = "SKU,Item Name,Category,Current Stock\n";
        filteredItems.forEach(item => {
            // Inga itemName matrum stockQty update panniyachu
            csvContent += `${item._id},"${item.itemName}",${item.category},${item.stockQty}\n`;
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `Low_Stock_Alerts_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
    };

    return (
        <Box sx={{ bgcolor: '#ffffff', borderRadius: '12px', p: 3, boxShadow: '0 1px 2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: 3 }}>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, justifyContent: 'space-between', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, fontFamily: '"Sora", sans-serif' }}>
                        Low Stock Alerts
                    </Typography>
                    <StatusBadge text={`${filteredItems.length} Items`} type="warning" />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f3f4f5', borderRadius: '8px', px: 1.5, py: 0.75 }}>
                        <FilterListIcon sx={{ fontSize: '18px', color: 'text.secondary', mr: 1 }} />
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', fontFamily: '"Manrope", sans-serif', fontSize: '14px', color: '#191c1d', cursor: 'pointer' }}
                        >
                            <option value="all">All Categories</option>
                            <option value="braking">Braking System</option>
                            <option value="lubricants">Lubricants & Fluids</option>
                            <option value="engine">Engine Spares</option>
                            <option value="hardware">Hardware & Tools</option>
                            <option value="electrical">Electrical & Batteries</option>
                        </select>
                    </Box>

                    <Button
                        variant="contained" disableElevation startIcon={<DownloadIcon sx={{ fontSize: '18px !important' }} />}
                        onClick={handleExportCSV}
                        sx={{ bgcolor: '#e7e8e9', color: '#191c1d', textTransform: 'none', fontWeight: 600, fontFamily: '"Manrope", sans-serif', '&:hover': { bgcolor: '#e1e3e4' } }}
                    >
                        Download CSV
                    </Button>

                    <Button
                        variant="contained" disableElevation startIcon={<ChatIcon sx={{ fontSize: '18px !important' }} />}
                        onClick={() => window.open('https://api.whatsapp.com/send?text=Low%20Stock%20Alerts%20Summary:%20Please%20check%20the%20dashboard.', '_blank')}
                        sx={{ bgcolor: '#25D366', color: '#fff', textTransform: 'none', fontWeight: 600, fontFamily: '"Manrope", sans-serif', '&:hover': { bgcolor: '#20ba59' } }}
                    >
                        Share
                    </Button>
                </Box>
            </Box>

            <TableContainer>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                        <CircularProgress size={30} />
                    </Box>
                ) : (
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow sx={{ '& th': { borderBottom: '1px solid #e1e3e4', color: 'text.secondary', textTransform: 'uppercase', fontSize: '11px', fontWeight: 700, py: 1.5 } }}>
                                <TableCell>Item Name</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell align="right">Current Stock</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredItems.map((item) => (
                                <TableRow key={item._id} sx={{ '&:hover': { bgcolor: '#f8f9fa' }, '& td': { borderBottom: '1px solid #f3f4f5', py: 2 } }}>

                                    <TableCell>
                                        {/* item.name ku bathila item.itemName */}
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>{item.itemName}</Typography>
                                    </TableCell>

                                    <TableCell>
                                        <StatusBadge text={item.category} type="default" />
                                    </TableCell>

                                    <TableCell align="right">
                                        {/* item.stock ku bathila item.stockQty */}
                                        <StatusBadge text={`${item.stockQty} ${item.stockQty === 1 ? 'unit' : 'units'}`} type="warning" />
                                    </TableCell>

                                    <TableCell align="center">
                                        <RestockButton onRestock={() => console.log(`Restocking ${item.itemName}`)} />
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </TableContainer>
        </Box>
    );
};

export default LowStockTable;