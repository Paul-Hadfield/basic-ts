
type Importance = "HIGH" | "MEDIUM" | "LOW"

export type Asset = {
  assetId: number;
  importance?: Importance;
  threatLevel?: number;
};

export type Vessel = {
  vesselId: string,
  assets: Asset[]
};

export type RecordTypes = Asset | Vessel;

const getThreatLevel = (item: Asset, importance: Importance) => {
  if (item.importance !== importance) {
    return 0;
  }

  return item.threatLevel ? item.threatLevel : 0;
};

const isVessel = (item: RecordTypes): item is Vessel => {
    return (item as Vessel).vesselId !== undefined
};

const isAsset = (item: RecordTypes): item is Asset => {
    return (item as Asset).assetId !== undefined;
};

const sumOfThreatLevels = (
  item: RecordTypes,
  importance: Importance
): number => {
  if (isVessel(item)) {
    return item.assets.reduce((sum, i) => {
      return sum + getThreatLevel(i, importance);
    }, 0);
  }

  if (isAsset(item)) {
    return getThreatLevel(item, importance);
  }

  return 0;
};

const sumThreat = (
  readInData: RecordTypes[],
  importance: Importance
): number => {
  return readInData.reduce((sum: number, item: RecordTypes) => {
    return sum + sumOfThreatLevels(item, importance);
  }, 0);
};

export default sumThreat