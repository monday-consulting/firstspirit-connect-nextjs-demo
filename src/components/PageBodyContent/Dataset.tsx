import React, { useMemo } from "react";
import { Dataset } from "fsxa-api";
import Unknown from "../Unknown";
import { useNextApp } from "../tests/testutils/nextMocks";

interface DatasetProps {
    content: Dataset;
}

const Dataset: React.FC<DatasetProps> = ({ content }) => {
    const { $isPreviewMode } = useNextApp();

    const datasetComponent = useMemo(() => {
        switch (content.template) {
            default:
                return undefined;
        }
    }, [content.template]);

    return (
        <div data-testid="dataset">
            {datasetComponent ? (
                <>{datasetComponent}</>
            ) : (
                $isPreviewMode && (
                    <Unknown content={content} data={content.data} />
                )
            )}
        </div>
    );
};

export default Dataset;
