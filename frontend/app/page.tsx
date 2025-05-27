import { CreditList } from "@/components/CreditList";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="Gestão de Créditos">
      <CreditList />
    </Layout>
  );
}
