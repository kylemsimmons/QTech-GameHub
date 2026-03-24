const GameCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="w-full h-40 bg-gray-200" />

      <div className="p-3 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
};

export default GameCardSkeleton;