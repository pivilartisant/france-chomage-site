// Simple, serious interactions only
document.addEventListener('DOMContentLoaded', function() {
    // No animations - direct display
    console.log('France Chômage - Site loaded');
    
    // Share functionality
    const shareX = document.getElementById('shareX');
    const shareInstagram = document.getElementById('shareInstagram');
    const shareWhatsApp = document.getElementById('shareWhatsApp');
    const copyLink = document.getElementById('copyLink');
    
    const shareText = "France Chômage - Recevez des offres d'emplois sur Telegram";
    const shareUrl = window.location.href;
    
    // X (Twitter) share
    shareX.addEventListener('click', function() {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
    });
    
    // Instagram share (opens Instagram)
    shareInstagram.addEventListener('click', function() {
        window.open('https://instagram.com/france_chomage', '_blank');
    });
    
    // WhatsApp share
    shareWhatsApp.addEventListener('click', function() {
        const whatsappText = `${shareText} ${shareUrl}`;
        const url = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
        window.open(url, '_blank');
    });
    
    // Copy link to clipboard
    copyLink.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(shareUrl);
            
            // Simple feedback
            const originalText = this.innerHTML;
            this.innerHTML = '✓';
            this.style.backgroundColor = '#0D00FF';
            this.style.color = '#FAFAFA';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.backgroundColor = '#FAFAFA';
                this.style.color = '#0D00FF';
            }, 1500);
            
        } catch (err) {
            console.error('Erreur lors de la copie:', err);
        }
    });
});
