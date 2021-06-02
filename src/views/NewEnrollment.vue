<template>

  <v-main>
    <v-card outlined align="center" class="ma-8 center">
        <h1 class="pt-3">New Student Enrollment</h1>
      <v-col>
        <v-form class="pa-5">
          <h3>Course Information:</h3>
          <v-autocomplete :items="courses" label="Choose courses"></v-autocomplete>
          <v-select :items="campuses" label="Choose Campus"></v-select>
          <h5>More information about campuses <a href="https://libertycollege.edu.au">(Click Here)</a> </h5>
          <v-select :items="intakes" label="Select Intake"></v-select>
          <h3>Personal Details:</h3>
          <v-select :items="titles" label="Title"></v-select>
          <v-text-field label="First Name" type="text"></v-text-field>
          <v-text-field label="Middle name (if applicable)" type="text"></v-text-field>
          <v-text-field label="Last Name" type="text"></v-text-field>
          <v-select :items="genders" label="Gender"></v-select>
          <v-text-field label="Birthday"  type="date"></v-text-field>
          <v-select :items="offshoreFlag" label="Where are you you lodging your student visa application..."></v-select>
          <v-select :items="countries" label="Citizenship"></v-select>
          <v-select :items="countries" label="Country of Birth"></v-select>
          <v-text-field label="Overseas Address" type="text"></v-text-field>
          <v-text-field label="Passport Number" type="text"></v-text-field>
          <v-text-field label="Unique Student Identifier" type="text"></v-text-field>
          <h3>Contact Information:</h3>
          <v-text-field label="E-Mail" type="email"></v-text-field>
          <v-text-field label="Phone Number" type="number"></v-text-field>
          <v-text-field label="Address" type="text"></v-text-field>
          <v-select :items="states" label="State"></v-select>
          <v-text-field label="Post Code" type="number"></v-text-field>
          <h3>Education History:</h3>
          <v-select :items="educations" label="What is your highest completed secondary Education level?"></v-select>
          <v-select :items="yesno" label="Do you require a CoE?"></v-select>
          <v-select :items="yesno" label="Have you taken an English test in the last 2 years?"></v-select>
          <h3>Additional Details:</h3>
          <v-select :items="employments" label="Employment status"></v-select>
          <v-select :items="yesno" label="Disability support"></v-select>
          <v-select :items="indigenous" label="Indigenous Status"></v-select>
          <h3>File Submission:</h3>
          <v-file-input
              chips
              counter
              show-size
              truncate-length="15"
              label="Passport"
          ></v-file-input>
          <v-file-input
              chips
              counter
              show-size
              truncate-length="15"
              label="English Proficiency Document:"
          ></v-file-input>
          <v-file-input
              chips
              counter
              show-size
              truncate-length="15"
              label="Academic History(s):"
          ></v-file-input>
          <v-file-input
              chips
              counter
              show-size
              truncate-length="15"
              label="Visa:"
          ></v-file-input>
          <v-switch label="Agree to terms & condition"></v-switch>
          <v-btn type="submit" color="primary"> Submit Enrollment</v-btn>
        </v-form>
      </v-col>
      <v-col> </v-col>
    </v-card>
  </v-main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data (){
    return{
      yesno:['Yes','No'],
      indigenous:['Indigenous Status...','Yes, Aboriginal','Yes, Torres Strait Islander',
        'Yes, Aboriginal and Torres Strait Islander','No, Neither Aboriginal nor Torres Strait Islander'],
      employments:['Full-time employee','Part-time employee','Self-employed - not employing others',
      'Self-employed - employing others','Employed - unpaid worker in a family business',
        'Unemployed - Seeking full-time work','Unemployed - Seeking part-time work'
      ],
      titles:['Mr','Mrs','Ms','Miss'],
      genders:['Male','Female','Other'],
      campuses:['Brisbane - Queensland','SunshineCoast - Queensland','Adelaide - South Australia'],
      offshoreFlag:['Offshore','Onshore'],
      intakes:['May 2021','June 2021','Jul 2021','Aug 2021','Sep 2021','Oct 2021'],
      countries:['Afghanistan',
        'Åland Islands',
        'Albania',
        'Algeria',
        'American Samoa',
        'AndorrA',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Bouvet Island',
        'Brazil',
        'British Indian Ocean Territory',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo',
        'Congo, The Democratic Republic of the',
        'Cook Islands',
        'Costa Rica-CR',
        'Cote D\'Ivoire-CI',
        'Croatia-HR',
        'Cuba-CU',
        'Cyprus-CY',
        'Czech Republic-CZ',
        'Denmark-DK',
        'Djibouti-DJ',
        'Dominica-DM',
        'Dominican Republic-DO',
        'Ecuador-EC',
        'Egypt-EG',
        'El Salvador-SV',
        'Equatorial Guinea-GQ',
        'Eritrea-ER',
        'Estonia-EE',
        'Ethiopia-ET',
        'Falkland Islands (Malvinas)-FK',
        'Faroe Islands-FO',
        'Fiji-FJ',
        'Finland-FI',
        'France-FR',
        'French Guiana-GF',
        'French Polynesia-PF',
        'French Southern Territories-TF',
        'Gabon-GA',
        'Gambia-GM',
        'Georgia-GE',
        'Germany-DE',
        'Ghana-GH',
        'Gibraltar-GI',
        'Greece-GR',
        'Greenland-GL',
        'Grenada-GD',
        'Guadeloupe-GP',
        'Guam-GU',
        'Guatemala-GT',
        'Guernsey-GG',
        'Guinea-GN',
        'Guinea-Bissau-GW',
        'Guyana-GY',
        'Haiti-HT',
        'Heard Island and Mcdonald Islands-HM',
        'Holy See (Vatican City State)-VA',
        'Honduras-HN',
        'Hong Kong-HK',
        'Hungary-HU',
        'Iceland-IS',
        'India-IN',
        'Indonesia-ID',
        'Iran, Islamic Republic Of-IR',
        'Iraq-IQ',
        'Ireland-IE',
        'Isle of Man-IM',
        'Israel-IL',
        'Italy-IT',
        'Jamaica-JM',
        'Japan-JP',
        'Jersey-JE',
        'Jordan-JO',
        'Kazakhstan-KZ',
        'Kenya-KE',
        'Kiribati-KI',
        'Korea, Democratic People\'S Republic of-KP',
        'Korea, Republic of-KR',
        'Kuwait-KW',
        'Kyrgyzstan-KG',
        'Lao PeopleS Democratic Republic-LA',
        'Latvia-LV',
        'Lebanon-LB',
        'Lesotho-LS',
        'Liberia-LR',
        'Libyan Arab Jamahiriya-LY',
        'Liechtenstein-LI',
        'Lithuania-LT',
        'Luxembourg-LU',
        'Macao-MO',
        'Macedonia, The Former Yugoslav Republic of-MK',
        'Madagascar-MG',
        'Malawi-MW',
        'Malaysia-MY',
        'Maldives-MV',
        'Mali-ML',
        'Malta-MT',
        'Marshall Islands-MH',
        'Martinique-MQ',
        'Mauritania-MR',
        'Mauritius-MU',
        'Mayotte-YT',
        'Mexico-MX',
        'Micronesia, Federated States of-FM',
        'Moldova, Republic of-MD',
        'Monaco-MC',
        'Mongolia-MN',
        'Montserrat-MS',
        'Morocco-MA',
        'Mozambique-MZ',
        'Myanmar-MM',
        'Namibia-NA',
        'Nauru-NR',
        'Nepal-NP',
        'Netherlands-NL',
        'Netherlands Antilles-AN',
        'New Caledonia-NC',
        'New Zealand-NZ',
        'Nicaragua-NI',
        'Niger-NE',
        'Nigeria-NG',
        'Niue-NU',
        'Norfolk Island-NF',
        'Northern Mariana Islands-MP',
        'Norway-NO',
        'Oman-OM',
        'Pakistan-PK',
        'Palau-PW',
        'Palestinian Territory, Occupied-PS',
        'Panama-PA',
        'Papua New Guinea-PG',
        'Paraguay-PY',
        'Peru-PE',
        'Philippines-PH',
        'Pitcairn-PN',
        'Poland-PL',
        'Portugal-PT',
        'Puerto Rico-PR',
        'Qatar-QA',
        'Reunion-RE',
        'Romania-RO',
        'Russian Federation-RU',
        'RWANDA-RW',
        'Saint Helena-SH',
        'Saint Kitts and Nevis-KN',
        'Saint Lucia-LC',
        'Saint Pierre and Miquelon-PM',
        'Saint Vincent and the Grenadines-VC',
        'Samoa-WS',
        'San Marino-SM',
        'Sao Tome and Principe-ST',
        'Saudi Arabia-SA',
        'Senegal-SN',
        'Serbia and Montenegro-CS',
        'Seychelles-SC',
        'Sierra Leone-SL',
        'Singapore-SG',
        'Slovakia-SK',
        'Slovenia-SI',
        'Solomon Islands-SB',
        'Somalia-SO',
        'South Africa-ZA',
        'South Georgia and the South Sandwich Islands-GS',
        'Spain-ES',
        'Sri Lanka-LK',
        'Sudan-SD',
        'Suriname-SR',
        'Svalbard and Jan Mayen-SJ',
        'Swaziland-SZ',
        'Sweden-SE',
        'Switzerland-CH',
        'Syrian Arab Republic-SY',
        'Taiwan, Province of China-TW',
        'Tajikistan-TJ',
        'Tanzania, United Republic of-TZ',
        'Thailand-TH',
        'Timor-Leste-TL',
        'Togo-TG',
        'Tokelau-TK',
        'Tonga-TO',
        'Trinidad and Tobago-TT',
        'Tunisia-TN',
        'Turkey-TR',
        'Turkmenistan-TM',
        'Turks and Caicos Islands-TC',
        'Tuvalu-TV',
        'Uganda-UG',
        'Ukraine-UA',
        'United Arab Emirates-AE',
        'United Kingdom-GB',
        'United States-US',
        'United States Minor Outlying Islands-UM',
        'Uruguay-UY',
        'Uzbekistan-UZ',
        'Vanuatu-VU',
        'Venezuela-VE',
        'Viet Nam-VN',
        'Virgin Islands, British-VG',
        'Virgin Islands, U.S.-VI',
        'Wallis and Futuna-WF',
        'Western Sahara-EH',
        'Yemen-YE',
        'Zambia-ZM',
        'Zimbabwe-ZW'],
      states:['QLD','SA','WA','NSW','VIC','ACT','TAS','NT'],
      educations:['Do not go to School','Year 9 or equivalent','Year 8 or below','Completed Year 10 or Equivalent',
        'Completed Year 11 or Equivalent','Completed Year 12 or Equivalent'],
      courses:['Certificate III in Carpentry','Certificate III in Wall and Floor Tiling',
        'Certificate IV in Building and Construction',
        'Diploma of Building and Construction (Building)']
    }
  },
  methods:{
    getCountryname(country){
      return country.name
    }
  }
}
</script>
