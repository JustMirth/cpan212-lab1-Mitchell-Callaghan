// A real bike share system updates these numbers every few seconds. They are
// fixed here so every student's API returns the same results.
export const stations = [
  { id: 'union-station', name: 'Union Station', neighbourhood: 'Downtown', bikesAvailable: 7, docksAvailable: 12 },
  { id: 'kensington-market', name: 'Kensington Market', neighbourhood: 'Kensington', bikesAvailable: 0, docksAvailable: 15 },
  { id: 'high-park-gate', name: 'High Park Gate', neighbourhood: 'High Park', bikesAvailable: 4, docksAvailable: 6 },
  { id: 'distillery-district', name: 'Distillery District', neighbourhood: 'Distillery', bikesAvailable: 11, docksAvailable: 4 },
  { id: 'queens-park', name: "Queen's Park", neighbourhood: 'Downtown', bikesAvailable: 2, docksAvailable: 18 },
  { id: 'cherry-beach', name: 'Cherry Beach', neighbourhood: 'Port Lands', bikesAvailable: 0, docksAvailable: 10 },
];

// Problem reports sent with POST /api/reports. Kept in memory, so they are gone
// when the server restarts.
export const reports = [];