export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#1f2937', fontSize: '36px', marginBottom: '10px', textAlign: 'center' }}>
          Digital Giant Global Limited
        </h1>
        <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px', textAlign: 'center' }}>
          Professional IT Solutions for Your Business
        </p>
        
        <div style={{ backgroundColor: '#f3f4f6', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
          <h2 style={{ color: '#1f2937', fontSize: '24px', marginBottom: '20px' }}>📍 Contact Information</h2>
          <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
            <p><strong>🏢 Address:</strong> 17/F, 80 Gloucester Road, Wan Chai, Hong Kong</p>
            <p><strong>📞 Phone:</strong> +852 9790 8638</p>
            <p><strong>✉️ Email:</strong> info@digitalgiantglobal.com</p>
            <p><strong>🕒 Business Hours:</strong> Monday - Friday: 9:30 AM - 6:30 PM HKT</p>
            <p><strong>📅 Weekend:</strong> Saturday & Sunday: Closed</p>
          </div>
        </div>
        
        <div style={{ backgroundColor: '#eff6ff', padding: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1f2937', fontSize: '24px', marginBottom: '20px' }}>🚀 Our Services</h2>
          <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
            <p><strong>💻 Web Development:</strong> Custom websites and applications</p>
            <p><strong>🔧 CRM Solutions:</strong> Customer relationship management systems</p>
            <p><strong>📊 IT Consulting:</strong> Technology strategy and digital transformation</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px', backgroundColor: '#1f2937', color: 'white', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px' }}>© 2025 Digital Giant Global Limited. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
