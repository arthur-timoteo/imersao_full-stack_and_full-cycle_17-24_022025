import { OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { AssetsService } from './assets.service';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { AssetsPresenter } from './assets.presenter';

@WebSocketGateway({ cors: true })
export class AssetsGateway implements OnGatewayInit {
  logger = new Logger(AssetsGateway.name);

  constructor(private assetsService: AssetsService){}

  afterInit(server: Server) {
      this.assetsService.subscribeNewPriceChangedEvents().subscribe((asset) => {
        server.to(asset.symbol).emit('assets/price-changed', new AssetsPresenter(asset).toJSON());
      });
  }

  @SubscribeMessage('joinAssets')
  handleJoinAssets(client: any, payload: { symbols: string[]}){

    if(!payload.symbols.length){
      return;
    }

    payload.symbols.forEach((symbol) => client.join(symbol));

    this.logger.log(`Client ${client.id} joined assets: ${payload.symbols.join(', ')}`);
  }
  
  @SubscribeMessage('joinAsset')
  handleJoinAsset(client: any, payload: { symbol: string}){
    client.join(payload.symbol);
    this.logger.log(`Client ${client.id} joined asset: ${payload.symbol}`);
  }

  @SubscribeMessage('leaveAssets')
  handleLeaveAssets(client: any, payload: { symbols: string[]}){
    if(payload.symbols.length){
      return;
    }

    payload.symbols.forEach((symbol) => client.leave(symbol));

    this.logger.log(`Client ${client.id} left assets: ${payload.symbols.join(', ')}`);
  }
  
  @SubscribeMessage('leaveAsset')
  handleLeaveAsset(client: any, payload: { symbol: string}){
    client.leave(payload.symbol); 
    this.logger.log(`Client ${client.id} left asset: ${payload.symbol}`);
  }
}
