function FilterSidebar({ selectedLocation, setSelectedLocation}) {
 const locations = ["Location 1", "Location 2", "Location 3", "Location 4"]; 

   return (
    <div>
        <h4>Filter by Location</h4>
        {locations.map(loc => (
            <div key={loc}>
                <input type="radio"
                checked={selectedLocation === loc} 
                onChange={() => setSelectedLocation(loc)}
                />

                {loc}
            </div>
        ))}
    </div>
   ); 
}
export default FilterSidebar;
