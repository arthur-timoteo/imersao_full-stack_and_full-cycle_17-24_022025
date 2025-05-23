import { AssetsPresenter } from '../assets/assets.presenter';
import { Asset } from 'src/assets/entities/asset.entity';
import { WalletAsset } from './entities/wallet-asset.entity';
import { Wallet } from './entities/wallet.entity';

export class WalletPresenter {
  constructor(private wallet: Wallet & { assets: (WalletAsset & { asset: Asset })[]}) {}

  toJSON() {
    return {
      _id: this.wallet._id,
      assets: this.wallet.assets.map((walletAsset) => {
        const assetPresenter = new AssetsPresenter(walletAsset.asset);
        return {
          asset: assetPresenter.toJSON(),
          shares: walletAsset.shares,
        };
      }),
    };
  }
}