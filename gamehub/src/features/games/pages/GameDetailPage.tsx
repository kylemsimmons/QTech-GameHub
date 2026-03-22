import { Layout } from "@shared/components/ui/Layout";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div>Game Detail for {id}</div>
    </Layout>
  );
};

export default GameDetailPage;