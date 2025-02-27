import { AssetsPresenter } from '../assets/assets.presenter';
import { Wallet } from './entities/wallet.entity';

export class WalletPresenter {
  constructor(private wallet: Wallet) {}

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