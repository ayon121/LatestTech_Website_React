
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import useMyProduct from '../../../Hooks/useMyProduct';

const UserStatistics = () => {
    
    const [myproducts] = useMyProduct()
    const userproduct = myproducts?.length
    const totalpostlimit =  20

    const data = [
        { name: 'Total Donation Price', value: userproduct },
        { name: 'Total Donated Price', value: totalpostlimit }
    ];


    const COLORS = ["#FF444A", "#82ca9d"];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className='mb-24'>
            <div style={{ width: '100%', height: '80%' }}>
                <ResponsiveContainer width="100%" height={600}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="30%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={160}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
                    <div className='flex items-center gap-2 '>
                        <h1 className='text-lg font-bold'>Your Post Limit</h1>
                        <div className='h-3 pt-1 w-44 bg-[#00C49F]'></div>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <h1 className='text-lg font-bold' >Total Post</h1>
                        <div className='h-3 pt-1 w-44 bg-[#FF444A]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserStatistics;