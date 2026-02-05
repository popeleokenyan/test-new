import { QualitySvg } from "./QualitySvg";

export const TrustIcon = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
        
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <div
              className="trust-icon-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
                borderRadius: "4px",
                width: "fit-content",
                margin: "auto",
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0585/0457/7123/files/badge-icon-free_1_-1761475939.png?v=1761475940)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "32px",
              }}
            >
              <div
                className="trust-icon"
                style={{
                  height: "32px",
                  width: "32px",
                  display: "flex",
                }}
              ></div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Free Delivery</h3>
          <p className="text-sm text-gray-500">
            Enjoy Free Nationwide Delivery
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <div
              className="trust-icon-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
                borderRadius: "4px",
                width: "fit-content",
                margin: "auto",
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0585/0457/7123/files/badge-icon-KEBS_1_-1761476023.png?v=1761476024)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "32px",
              }}
            >
              <div
                className="trust-icon"
                style={{
                  height: "32px",
                  width: "32px",
                  display: "flex",
                }}
              ></div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">KEBS Certified</h3>
          <p className="text-sm text-gray-500">
            Your Assurance of Quality and Safety
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <QualitySvg />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">
            Premium Quality Steel
          </h3>
          <p className="text-sm text-gray-500">Durable & Reliable</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <div
              className="trust-icon-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
                borderRadius: "4px",
                margin: "auto",
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0585/0457/7123/files/badge-icon-warranty_1_-1761476170.png?v=1761476172)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "32px",
                height: "32px",
                width: "32px",
              }}
            ></div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">50-Year Warranty</h3>
          <p className="text-sm text-gray-500">Built to Last</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <div
              className="trust-icon-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
                borderRadius: "4px",
                width: "fit-content",
                margin: "auto",
                backgroundImage:
                  "url(https://trust-file.seoant.com/sys-custom/ecommerce/shield.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "32px",
              }}
            >
              <div
                className="trust-icon"
                style={{
                  height: "32px",
                  width: "32px",
                  display: "flex",
                }}
              ></div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Secure Checkout</h3>
          <p className="text-sm text-gray-500">Secure Payment</p>
        </div>
      </div>
    );
}