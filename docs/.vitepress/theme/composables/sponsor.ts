import {onMounted, ref} from "vue";

interface Sponsors {
    special: Sponsor[]
    platinum: Sponsor[]
    platinum_china: Sponsor[]
    gold: Sponsor[]
    silver: Sponsor[]
    bronze: Sponsor[]
}

interface Sponsor {
    name: string
    img: string
    url: string
}

// shared data across instances so we load only once.
const data = ref();

const dataHost = "https://sponsors.vuejs.org";
const dataUrl = `${dataHost}/hizzy.json`;

const hizzySponsors: Pick<Sponsors, "special" | "gold"> = {
    special: [],
    gold: [],
};

export function useSponsor() {
    onMounted(async () => {
        if (data.value) return;
        const result = await fetch(dataUrl);
        const json = await result.json();
        data.value = mapSponsors(json);
    });
    return {data};
}

function mapSponsors(sponsors: Sponsors) {
    return [
        {tier: "Special Sponsors", size: "big", items: hizzySponsors["special"],},
        {tier: "Platinum Sponsors", size: "big", items: mapImgPath(sponsors["platinum"]),},
        {tier: "Gold Sponsors", size: "medium", items: hizzySponsors["gold"].concat(mapImgPath(sponsors["gold"])),},
    ];
}

const hizzySponsorNames = new Set(
    Object.values(hizzySponsors).flatMap(sponsors =>
        sponsors.map(sponsor => sponsor.name)
    )
);

/**
 * Map Vue/Hizzy sponsors data to objects and filter out Hizzy-specific sponsors
 */
function mapImgPath(sponsors: Sponsor[]) {
    return sponsors
        .filter((sponsor) => !hizzySponsorNames.has(sponsor.name))
        .map((sponsor) => ({
            ...sponsor,
            img: `${dataHost}/images/${sponsor.img}`,
        }));
}