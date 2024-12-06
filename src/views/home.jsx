import Chart_view from '@/components/chart_view.jsx';
import Table_view from '@/components/table_view.jsx';




function Home () {
  return (
    <div className='text-center w-full'> 
      
      <Chart_view />

      <Table_view/>
      
    </div>
  );
}

export default Home;