import { CreateFeedbackModal } from "@/components/module/feedback/create-feedback-modal";
import { FeedbackTable } from "@/components/module/feedback/feedback-table";
import SettingsModal from "@/components/module/settings/SettingsModal";

const Home = () => {
    return (
        <div>
        <div className="flex justify-end mb-6 gap-4">
        <CreateFeedbackModal/>
        <SettingsModal />
        </div>
        <div>
            <FeedbackTable/>
        </div>
        </div>
    );
};

export default Home;