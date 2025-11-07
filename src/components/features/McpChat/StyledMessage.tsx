"use client";

import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type StyledMessageProps = { content: string | Record<string, unknown> };

export const StyledMessage = ({ content }: StyledMessageProps) => {
  const isOrderJsonString =
    typeof content === "string" &&
    content.trim().startsWith("{") &&
    /"@type"\s*:\s*"Order"/.test(content);

  const orderObject =
    isOrderJsonString
      ? safeParse(content as string)
      : typeof content === "object" && content && (content as any)["@type"] === "Order"
      ? (content as any)
      : null;

  if (!orderObject) {

  // Keep GFM for tables, task lists, and pipes
  const remarkPluginsList = useMemo(() => [remarkGfm], []);

  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={remarkPluginsList}
      >
        {content as string}
      </ReactMarkdown>
    </div>
  );

  }

  // Felder extrahieren und formatieren

  if(!orderObject.hasError){

 
  const orderNumber = orderObject.orderNumber ?? "";
  const orderDate = formatIsoToDE(orderObject.orderDate);
  const orderStatus = getUrlTail(orderObject.orderStatus);

  const address = orderObject.shippingAddress ?? {};
  const streetAddress = address.streetAddress ?? "";
  const postalCode = address.postalCode ?? "";
  const addressLocality = address.addressLocality ?? "";
  const addressCountry = address.addressCountry ?? "";

  const item = orderObject.orderedItem ?? {};
  const product =
    item.orderedItem ?? orderObject.acceptedOffer?.itemOffered ?? {};
  const productName = product.name ?? "";
  const sku = product.sku ?? "";

  const quantity =
    orderObject.acceptedOffer?.eligibleQuantity?.value ??
    item.orderQuantity ??
    1;

  const price = orderObject.acceptedOffer?.price ?? 0;
  const priceCurrency = orderObject.acceptedOffer?.priceCurrency ?? "EUR";


  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h1 className="text-lg font-semibold">Bestellung</h1>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
            {orderStatus || "unbekannt"}
          </span>
        </div>
  
        {/* Body */}
        <div className="px-5 py-4">
          <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <div>
              <span className="font-medium">Bestellnummer:</span> {orderNumber}
            </div>
            <div>
              <span className="font-medium">Datum:</span> {orderDate}
            </div>
          </div>
  
          {/* Address */}
          <h2 className="mt-2 text-sm font-semibold text-gray-700">Versandadresse</h2>
          <div className="mt-2 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="w-1/4 bg-gray-50 px-4 py-2 font-medium text-gray-700">Straße</th>
                  <td className="px-4 py-2">{streetAddress}</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 px-4 py-2 font-medium text-gray-700">PLZ / Ort</th>
                  <td className="px-4 py-2">
                    {postalCode} {addressLocality}
                  </td>
                </tr>
                <tr>
                  <th className="bg-gray-50 px-4 py-2 font-medium text-gray-700">Land</th>
                  <td className="px-4 py-2">{addressCountry}</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          {/* Article */}
          <h2 className="mt-6 text-sm font-semibold text-gray-700">Artikel</h2>
          <div className="mt-2 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-2 font-medium">Produktname</th>
                  <th className="px-4 py-2 font-medium">SKU</th>
                  <th className="px-4 py-2 text-right font-medium">Menge</th>
                  <th className="px-4 py-2 text-right font-medium">Preis</th>
                  <th className="px-4 py-2 text-right font-medium">Verfügbarkeit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">{productName}</td>
                  <td className="px-4 py-2">
                    <code className="rounded bg-gray-100 px-1.5 py-0.5">{sku}</code>
                  </td>
                  <td className="px-4 py-2 text-right">{quantity}</td>
                  <td className="px-4 py-2 text-right">{price} {priceCurrency}</td>
                  <td className="px-4 py-2 text-right">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        {/* Footer */}
        <div className="border-t border-gray-200 px-5 py-3 text-xs text-gray-500">
          Vielen Dank für Ihre Bestellung!
        </div>
      </div>
    </div>
  );
} else {
  return(
    <div>
       <div className="card font-medium">
          <div className="card-body">
            <pre className="m-0" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                Leider konnten wir ihr gewünschtes Produkt nicht ermitteln. Überprüfen Sie Ihre Eingabe oder kontaktieren Sie den Support.
            </pre>
          </div>
        </div>
    </div>
    )
  
  }
};

/* ----------------- Helpers ----------------- */

const safeParse = (text: string): any | null =>  {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

const getUrlTail = (value?: string): string  => {
  if (!value) return "";
  const index = value.lastIndexOf("/");
  return index >= 0 ? value.slice(index + 1) : value;
}

const formatIsoToDE = (value?: string): string  => {
  if (!value) return "";
  try {
    return new Date(value).toLocaleString("de-DE", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return value || "";
  }
}
