import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import crypto from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';
import { WalletAsset, WalletAssetDocument } from './wallet-asset.entity';

export type WalletDocument = HydratedDocument<Wallet>;

@Schema({ timestamps: true, optimisticConcurrency: true })
export class Wallet {
    @Prop({ default: () => crypto.randomUUID() })
    _id: string;

    @Prop({
        type: [mongoose.Schema.Types.String],
        ref: WalletAsset.name,
        set: (v) => [...new Set(v)]
    })
    assets: WalletAssetDocument[] | string[];

    createAt!: Date;
    updatedAt!: Date;
}


export const WalletSchema = SchemaFactory.createForClass(Wallet);