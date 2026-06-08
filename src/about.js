export default function loadAbout(){
    const content = document.querySelector("#content");
    content.insertAdjacentHTML('beforeend', /*html*/`
        <div id="about">
            <div id="leftSide">
                <div id="leftSide1">Below the fog of Gotham's streets lies a world unto itself — where the ice never melts, the music never stops, and every shadow holds a secret worth keeping.</div>
                <div id="leftSide2">- Carved beneath the docks of Gotham's waterfront, the Iceberg Lounge has long stood as the city's most distinguished — and most whispered-about — destination. What began as the private ambition of its enigmatic proprietor has become a landmark of Gotham nightlife: a place where politicians and crime lords, socialites and detectives, share the same candlelit air.</div>
                <div id="leftSide3">- Our kitchen draws from the classical European tradition, refined through decades of obsessive craft. Our cellar is unmatched in the city. The penguins — our living mascots — glide through the gallery level, serene and indifferent to whatever deals are struck below.</div>
                <div id="leftSide4">- The Iceberg does not ask who you are. It only asks that you dress accordingly.</div>
                <div id="leftSide5"><blockquote>" In Gotham, power has always worn a tuxedo. The Iceberg Lounge is simply where it comes to dine.</blockquote><cite>— Oswald Cobblepot, Proprietor</cite></div>
            </div>
            <div id="rightSide">
                <div id="rightSide1">
                    <p id="pHeading">- The Dinging Room</p><p>Fifty covers arranged beneath vaulted ice-glass ceilings. Continental cuisine reinterpreted for Gotham's particular palate — indulgent, precise, and never rushed.</p>
                </div>
                <div id="rightSide2">
                    <p id="pHeading">- The Vault Bar</p><p>Rare single malts, custom cocktails, and a champagne program that runs deeper than the lounge's own foundations. Open nightly until the city forgets the hour.</p>
                </div>
                <div id="rightSide3">
                    <p id="pHeading">- The Aviary Gallery</p><p>Home to our famous resident penguins — seven species, one address. The gallery level opens one hour before dinner service for viewing.</p>
                </div>
                <div id="rightSide4">
                    <p id="pHeading">- Private Rooms</p><p>Three soundproofed suites for meetings, celebrations, and conversations best kept off the record. Inquire with the maître d' — no names required.</p>
                </div>
                <div id="rightSide5"><p id='pHeading'>- Contact?</p><p>DON'T</p></div>
            </div>
        </div>
    `);
}