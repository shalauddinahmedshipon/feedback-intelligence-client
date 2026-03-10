import { FeedbackTable } from "@/components/module/feedback/feedback-table";
import SettingsModal from "@/components/module/settings/SettingsModal";

const Home = () => {
    return (
        <div>
        <div className="flex justify-end mb-6">
        <SettingsModal />
        </div>
        <div>
            <FeedbackTable/>
        </div>
        </div>
    );
};

export default Home;