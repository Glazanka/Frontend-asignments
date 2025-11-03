import React, { useEffect, useState } from "react";
import type { Trip } from "./types/Trip";
import TripCard from "./components/TripCard";
import SearchBar from "./components/SearchBar";
import SortToggle from "./components/SortToggle";
import "./App.scss";

const App: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);
  const [search, setSearch] = useState("");
  const [sortByRating, setSortByRating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await fetch("/data/data.json");
        if (!res.ok) throw new Error("Failed to load data");
        const data = await res.json();
        setTrips(data.trips);
        setFilteredTrips(data.trips);
      } catch (err) {
        setError("Error loading trips");
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  useEffect(() => {
    let updated = [...trips];
    if (search) {
      updated = updated.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sortByRating) {
      updated.sort((a, b) => b.rating - a.rating);
    }
    setFilteredTrips(updated);
  }, [search, sortByRating, trips]);

  if (loading) return <div className="status">Loading...</div>;
  if (error) return <div className="status error">{error}</div>;

  return (
    <div className="app-container">
      <h1>🌎 Trip Card Explorer</h1>
      <div className="controls">
        <SearchBar query={search} onChange={setSearch} />
        <SortToggle
          sortByRating={sortByRating}
          onToggle={() => setSortByRating((prev) => !prev)}
        />
      </div>

      <div className="grid">
        {filteredTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default App;
