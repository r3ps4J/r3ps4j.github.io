import RepositoryButton from "./RepositoryButton";
import ReleasesButton from "./ReleasesButton";

export default function ResourceLinks(props: { user: string; repo: string }) {
    return (
        <div className="flex flex-row gap-2 items-center">
            <RepositoryButton {...props} />
            <ReleasesButton {...props} />
        </div>
    );
}
