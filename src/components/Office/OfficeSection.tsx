import { Box } from "./Box/Box";
import { Header } from "./Header/Header";

export const OfficeSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header />
                <Box />
            </div>
        </section>
    );
};