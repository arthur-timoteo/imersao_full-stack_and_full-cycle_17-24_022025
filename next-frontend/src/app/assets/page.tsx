import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Wallet } from "./../models";
import Image from "next/image";

export async function getAssets(): Promise<Wallet>{
  const response = await fetch(`http://localhost:3000/assets`);
  return response.json();
}

export default async function AssetsListPage() {
  const assets = await getAssets();

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Ativos</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>            
          </TableHead>
          <TableBody>
            {assets.map((asset, key) => (
              <TableRow key={key}>
                <TableCell>
                  <div className="flex space-x-1">
                    <div className="content-center">
                      <Image 
                        src={asset.image_url} 
                        alt={asset.symbol}
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <span>{asset.name}</span>
                      <span>{asset.symbol}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>R$ {asset.price}</TableCell>
                <TableCell>
                  <Button color="light">Comprar/Vender</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
