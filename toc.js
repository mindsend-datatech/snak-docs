// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="welcome.html"><strong aria-hidden="true">1.</strong> Welcome</a></li><li class="chapter-item expanded "><a href="intro.html"><strong aria-hidden="true">2.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="overview.html"><strong aria-hidden="true">3.</strong> Overview</a></li><li class="chapter-item expanded "><a href="architecture.html"><strong aria-hidden="true">4.</strong> Architecture</a></li><li class="chapter-item expanded "><a href="faqs.html"><strong aria-hidden="true">5.</strong> FAQs</a></li><li class="chapter-item expanded "><a href="support.html"><strong aria-hidden="true">6.</strong> Support</a></li><li class="chapter-item expanded "><a href="user-guide/index.html"><strong aria-hidden="true">7.</strong> User Guide</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="user-guide/video-tutorials.html"><strong aria-hidden="true">7.1.</strong> Video Tutorials</a></li><li class="chapter-item expanded "><a href="user-guide/connect.html"><strong aria-hidden="true">7.2.</strong> Connect to snaK</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="user-guide/approve-request.html"><strong aria-hidden="true">7.2.1.</strong> Approve the Connection Request</a></li><li class="chapter-item expanded "><a href="user-guide/approve-permissions.html"><strong aria-hidden="true">7.2.2.</strong> Approve Permissions to Add Snap</a></li><li class="chapter-item expanded "><a href="user-guide/confirm-final.html"><strong aria-hidden="true">7.2.3.</strong> Confirm Final Permissions</a></li><li class="chapter-item expanded "><a href="user-guide/success.html"><strong aria-hidden="true">7.2.4.</strong> Snap Installed Successfully</a></li></ol></li><li class="chapter-item expanded "><a href="user-guide/faucet.html"><strong aria-hidden="true">7.3.</strong> Fund Your Account via Testnet Faucet</a></li><li class="chapter-item expanded "><a href="user-guide/ledger.html"><strong aria-hidden="true">7.4.</strong> Using Ledger</a></li><li class="chapter-item expanded "><a href="user-guide/switch-network.html"><strong aria-hidden="true">7.5.</strong> Switching Networks</a></li><li class="chapter-item expanded "><a href="user-guide/send-kda.html"><strong aria-hidden="true">7.6.</strong> Sending KDA</a></li><li class="chapter-item expanded "><a href="user-guide/sign-tx.html"><strong aria-hidden="true">7.7.</strong> Signing Transactions</a></li><li class="chapter-item expanded "><a href="user-guide/add-network.html"><strong aria-hidden="true">7.8.</strong> Adding Custom Networks</a></li></ol></li><li class="chapter-item expanded "><a href="dev-kickstart.html"><strong aria-hidden="true">8.</strong> SDK Quickstart</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
