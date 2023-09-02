/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PetCardProps } from "./PetCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetCardCollectionOverridesProps = {
    PetCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    PetCard?: PetCardProps;
} & EscapeHatchProps;
export declare type PetCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PetCardProps;
} & {
    overrides?: PetCardCollectionOverridesProps | undefined | null;
}>;
export default function PetCardCollection(props: PetCardCollectionProps): React.ReactElement;
