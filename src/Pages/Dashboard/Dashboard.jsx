import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Box, Typography, CircularProgress } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import WarningIcon from '@mui/icons-material/Warning';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ArchiveIcon from '@mui/icons-material/Archive';
import Sidebar from '../../Components/WrapperComponents/Global/sidebar';
import TopHeader from '../../Components/WrapperComponents/Global/TopHeader';
import DashboardSearch from '../../Components/SpecifiedComponents/Dashboard/DashboardBoardSearch';
import KpiCard from '../../Components/SpecifiedComponents/Dashboard/KpiCard';
import QuickActionButton from '../../Components/SpecifiedComponents/Dashboard/QuickAccessButton';
import LowStockTable from '../../Components/WrapperComponents/Dashboard/LowStockTable';



const actionButtons = [
    {
        title: "New Bill",
        icon: PointOfSaleIcon,
        shortcut: "F2",
        path: "/pos",
        bg: "#1e293b", // primary-container (Dark Slate)
        hoverBg: "#091426", // primary (Darker)
        textColor: "#ffffff",
        iconBg: "#7ffc97", // light green
        iconColor: "#005320", // dark green
        arrowColor: "#8590a6"
    },
    {
        title: "Add Stock",
        icon: ArchiveIcon,
        shortcut: "F4",
        path: "/inventory",
        bg: "#0051d5", // secondary (Blue)
        hoverBg: "#316bf3", // secondary-container (Lighter Blue)
        textColor: "#ffffff",
        iconBg: "#dbe1ff", // light blue
        iconColor: "#00174b", // dark blue
        arrowColor: "#dbe1ff"
    }
];

const Dashboard = () => {

    const [metrics, setMetrics] = useState({
        totalRevenue: 0,
        billsCount: 0,
        lowStockCount: 0
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardMetrics = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/dashboard');
                const data = response.data.data;
                setMetrics({
                    totalRevenue: data.totalRevenue || 0,
                    billsCount: data.billsCount || 0,
                    lowStockCount: data.lowStockCount || 0
                });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching dashboard metrics: ", error);
                setLoading(false);
            }
        };
        fetchDashboardMetrics();
    }, [])

    const kpiCardItems = [
        {
            title: "Today's Sales (₹)",
            value: `${metrics.totalRevenue.toLocaleString('en-IN')}`,
            icon: CurrencyRupeeIcon,
            iconBg: "#7ffc97",// tertiary-fixed color
            iconColor: "#005320",// on-tertiary-fixed-variant
            trend: "+14.8%"
        },
        {
            title: "Bills Today",
            value: metrics.billsCount.toString(),
            icon: ReceiptLongIcon,
            iconBg: "#dbe1ff", // secondary-fixed
            iconColor: "#003ea8" // on-secondary-fixed-variant
        },
        {
            title: "Low Stock Items",
            value: metrics.lowStockCount.toString(),
            icon: WarningIcon,
            iconBg: "#ffdad6", // error-container
            iconColor: "#93000a" // on-error-container
        }
    ]

    return (


        <Box sx={{ display: 'flex', bgcolor: 'background.default', minHeight: '100vh' }}>

            {/* Namma uruvaakkina Sidebar Inga varum */}
            <Sidebar />
            <TopHeader />

            <Box component="main" sx={{ flexGrow: 1, ml: '256px', mt: '64px', p: 3 }}>

                {/* Row 1: Welcome Message & Search Bar */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { sm: 'center' },
                        justifyContent: 'space-between',
                        mb: 4,
                        gap: 2
                    }}
                >
                    <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, fontFamily: '"Sora", sans-serif', letterSpacing: '-0.5px' }}>
                        Welcome back, Vishnu
                    </Typography>
                    <DashboardSearch />
                </Box>

                {/* Row 2: KPI Metrics Cards */}
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                            gap: 3,
                            mb: 4,
                        }}
                    >
                        {kpiCardItems.map((item, index) => (
                            <KpiCard
                                key={index}
                                title={item.title}
                                value={item.value}
                                icon={item.icon}
                                iconBg={item.iconBg}
                                iconColor={item.iconColor}
                                trend={item.trend}
                            />
                        ))}
                    </Box>)}

                {/* Row 3: Quick Action Buttons */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 3,
                        mb: 4,
                    }}
                >
                    {actionButtons.map((btn, index) => (
                        <QuickActionButton
                            key={index}
                            title={btn.title}
                            icon={btn.icon}
                            shortcut={btn.shortcut}
                            path={btn.path}
                            bg={btn.bg}
                            hoverBg={btn.hoverBg}
                            textColor={btn.textColor}
                            iconBg={btn.iconBg}
                            iconColor={btn.iconColor}
                            arrowColor={btn.arrowColor}
                        />
                    ))}
                </Box>
                <LowStockTable />
            </Box>

        </Box>
    );
};

export default Dashboard;