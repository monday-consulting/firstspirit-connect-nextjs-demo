import React, { useMemo } from "react";
import type { Dataset as FsxaDataset } from "fsxa-api";
import { Unknown } from "../Unknown";
import { useNextApp } from "../tests/testutils/nextMocks";

interface DatasetProps {
  content: FsxaDataset;
}

const Dataset = ({ content }: DatasetProps) => {
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
        $isPreviewMode && <Unknown content={content} data={content.data} />
      )}
    </div>
  );
};

export default Dataset;
