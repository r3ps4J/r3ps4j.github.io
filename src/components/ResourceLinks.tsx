import { Cards } from "nextra/components";
import RepositoryButton from "./RepositoryButton";
import ReleasesButton from "./ReleasesButton";

export default function ResourceLinks(props: { user: string; repo: string }) {
    return (
        <Cards>
            <RepositoryButton {...props} />
            <ReleasesButton {...props} />
        </Cards>
    );
}
